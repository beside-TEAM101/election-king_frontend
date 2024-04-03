'use client'

/* eslint-disable react/jsx-no-bind */
import useWindowSize from '@/hooks/useWindowSize'
import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

// workerSrc 정의 하지 않으면 pdf 보여지지 않습니다.
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

function PDFViewer() {
	const windowSize = useWindowSize()
	const [lastPage, setLastPage] = useState(0)
	const [pageNumber, setPageNumber] = useState(1)

	function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
		setLastPage(numPages)
		setPageNumber(1)
	}

	return (
		<>
			<Document
				file={{
					url: 'http://info.nec.go.kr/unielec_pdf_file/20240410/open/Gsg1101/Hb100152901/junkwa/20240229174526249_1.PDF',
				}}
				onLoadSuccess={onDocumentLoadSuccess}>
				<Page
					width={windowSize.width}
					height={windowSize.height}
					pageNumber={pageNumber}
				/>
			</Document>
			Page {pageNumber} of {lastPage}
			{pageNumber > 1 && (
				<button
					type="button"
					onClick={() => setPageNumber((prev) => prev + -1)}>
					이전페이지
				</button>
			)}
			{pageNumber < lastPage && (
				<button
					type="button"
					onClick={() => setPageNumber((prev) => prev + +1)}>
					다음페이지
				</button>
			)}
		</>
	)
}

export default PDFViewer
