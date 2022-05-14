import React, { useState, useCallback } from 'react';
import { Container, ContentModal, Title, IconContainer } from './styles';
import { AiOutlineDislike, AiOutlineLike, AiFillDislike, AiFillLike } from "react-icons/ai";

const Modal = ({ children }) => {
	const [selected, setSelected] = useState(null)

	const handleSelect = useCallback(index => {
		setSelected(index)
	}, [selected])

	return (
		<>
			{!selected && <Container>
				<ContentModal>
					<Title> O que achou do nosso atendimento?</Title>
					<IconContainer>

						{selected === 1 ?
							(<AiFillLike size={40} color={'#fff'} />)
							: (<AiOutlineLike size={40} color={'#fff'} onClick={() => handleSelect(1)} />)
						}

						{selected === 2 ?
							(<AiFillDislike size={40} color={'#fff'} />)
							: (<AiOutlineDislike size={40} color={'#fff'} onClick={() => handleSelect(2)} />)
						}

					</IconContainer>
				</ContentModal>
			</Container>}

		</>
	)
}
export default Modal