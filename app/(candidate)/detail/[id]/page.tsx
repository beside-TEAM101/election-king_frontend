export default function Detail({ params }: { params: { id: string } }) {
	return <div>{params.id}</div>
}
