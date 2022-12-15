import React from "react";
import styled from "styled-components";
import {useSpring, animated} from "react-spring";
import Image from "next/image";
import mockupHero from "../../assets/heroImg1-scaled.webp";

const Container = styled(animated.div)`
	width: 100%;
`;

// const StyledImage = styled.Image`
// 	width: 100%;
// `;

const calc = (x, y) => [
	-(y - window.innerHeight / 2) / 20,
	(x - window.innerWidth / 2) / 20,
	1.1,
];
const trans = (x, y, s) =>
	`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const MockupAnimated = ({image}) => {
	const [props, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: {mass: 10, tension: 200, friction: 50},
	}));

	return (
		<Container
			onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
			onMouseLeave={() => set({xys: [0, 0, 1]})}
			style={{
				transform: props.xys.interpolate(trans),
			}}>
			<Image
				src={mockupHero}
				alt="app mockup"
				className="md:scale-125 mt-16"
			/>
		</Container>
	);
};

export default MockupAnimated;
