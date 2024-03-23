import axios, {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios'

const request = axios.create({
	baseURL: process.env.API_ENTRY,
})

const onRequest = (
	config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
	const { method, url } = config

	console.log(`🛫 [API - REQUEST] ${method?.toUpperCase()} ${url}`)

	return config
}

const onResponse = (res: AxiosResponse): AxiosResponse => {
	const { method, url } = res.config
	const { status, statusText } = res
	if (statusText === 'OK') {
		console.log(
			`🛬 [API - RESPONSE] ${method?.toUpperCase()} ${url} | ${status} : ${statusText}`
		)
	} else {
		console.log(
			`🚨 [API - ERROR] ${method?.toUpperCase()} ${url} | ${status} : ${statusText}`
		)
	}

	return res
}

const onError = (error: AxiosError | Error): Promise<AxiosError> => {
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
	return Promise.reject(error)
}
request.interceptors.request.use(onRequest)
request.interceptors.response.use(onResponse, onError)
export default request
