import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { debounce } from '../utils/debounceThrottle'

interface Request {
  config: AxiosRequestConfig
  resolve: (value?: AxiosResponse | PromiseLike<AxiosResponse>) => void
  reject: (reason?: any) => void
  retries: number
}

const MAX_RETRIES = 0

class Queue {
  private queue: Request[] = []

  private processQueueDebounced: () => void

  constructor() {
    this.processQueueDebounced = debounce(this.processQueue.bind(this), 1000)
  }

  async add(request: AxiosRequestConfig): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.queue.push({
        config: request,
        resolve,
        reject,
        retries: 0,
      })
      this.processQueueDebounced()
    })
  }

  async processQueue() {
    if (this.queue.length === 0) return

    const { config, resolve, reject, retries } = this.queue.shift()!

    try {
      const response = await axios(config)
      resolve(response)
      this.processQueueDebounced()
    } catch (error) {
      if (retries < MAX_RETRIES) {
        // Retry the same request
        this.queue.unshift({
          config,
          resolve,
          reject,
          retries: retries + 1,
        })
        this.processQueueDebounced()
      } else {
        reject(error)
      }
    }
  }
}

const queue = new Queue()

export default queue
