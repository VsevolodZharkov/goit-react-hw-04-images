import { TailSpin } from  'react-loader-spinner'

export const Spiner = () => {
	return (
		<>
			<TailSpin color="blue" height={200} width={200} wrapperStyle={{display: 'flex',  justifyContent: 'center',
        marginTop: 200 }}/>
		</>
	)
}