'use client'

import PDFViewer from '@/components/common/PDFViewer'

export default function Viewer({ params }: { params: { id: string } }) {
	console.log('params', params)
	return <PDFViewer />
}
