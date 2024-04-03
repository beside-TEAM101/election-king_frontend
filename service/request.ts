import axios, {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios'
import https from 'https'

const requestConfig: Record<string, any> = {
	baseURL: process.env.API_ENTRY,
}

if (process.env.NODE_ENV !== 'production') {
	requestConfig.httpsAgent = new https.Agent({
		rejectUnauthorized: false,
	})
}

const request = axios.create(requestConfig)

const onRequest = (
	config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
	const { method, url } = config

	if (process.env.NODE_ENV === 'development') {
		console.log(`🛫 [API - REQUEST] ${method?.toUpperCase()} ${url}`)
	}

	return config
}

const onResponse = (res: AxiosResponse): AxiosResponse => {
	const { method, url } = res.config
	const { status, statusText } = res

	if (process.env.NODE_ENV === 'development') {
		if (statusText === 'OK') {
			console.log(
				`🛬 [API - RESPONSE] ${method?.toUpperCase()} ${url} | ${status} : ${statusText}`
			)
		} else {
			console.log(
				`🚨 [API - ERROR] ${method?.toUpperCase()} ${url} | ${status} : ${statusText}`
			)
		}
	}

	return res
}

const onError = (error: AxiosError | Error): Promise<AxiosError> => {
	if (process.env.NODE_ENV === 'development') {
		if (axios.isAxiosError(error)) {
			const { method, url } = error.config as InternalAxiosRequestConfig

			if (error.response) {
				const { status, statusText } = error.response
				console.log(
					`🚨 [API - ERROR] ${method?.toUpperCase()} ${url} | ${status} : ${statusText}`
				)
			}
		} else {
			console.log(`🚨 [API] | Error ${error.message}`)
		}
	}

	return Promise.reject(error)
}
request.interceptors.request.use(onRequest)
request.interceptors.response.use(onResponse, onError)
export default request
