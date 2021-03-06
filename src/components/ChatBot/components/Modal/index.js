import { useState, useCallback } from "react"
import { AiOutlineDislike, AiOutlineLike, AiFillDislike, AiFillLike } from "react-icons/ai"

import { Container, ContentModal, Title, IconContainer } from "./styles"

const Modal = ({ children }) => {
	const [selected, setSelected] = useState(null)
	const [isVisisble, setIsVisible] = useState(true)

	const handleSelect = useCallback(index => {
		setSelected(index)
		setTimeout(() => {
			setIsVisible(false)
		}, 1000)
	}, [selected])

	return (
		<>
			{
				isVisisble &&
				<Container>
					<ContentModal>
						<Title> O que achou do nosso atendimento?</Title>
						<IconContainer>

							{selected === 1 ?
								(<AiFillLike size={40} color={"#fff"} />)
								: (<AiOutlineLike size={40} color={"#fff"} onClick={() => handleSelect(1)} />)
							}

							{selected === 2 ?
								(<AiFillDislike size={40} color={"#fff"} />)
								: (<AiOutlineDislike size={40} color={"#fff"} onClick={() => handleSelect(2)} />)
							}

						</IconContainer>
					</ContentModal>
				</Container>
			}
		</>
	)
}
export default Modal