import { Image, Modal } from '@mantine/core';
import { Carousel, Embla } from "@mantine/carousel";
import { useState } from "react";

type PostCarouselProps = {
    opened: boolean;
    initialSlide: number;
    setOpened: (isOpen: boolean) => void;
}
export default function PostCarousel({opened, initialSlide, setOpened}: PostCarouselProps) {
    return (
        <Modal
            opened={opened}
            size={'70%'}
            padding={0}
            withCloseButton={true}
            onClose={() => setOpened(false)}
            centered
        >
            <Carousel
                initialSlide={initialSlide}
            >
                <Carousel.Slide>
                    <Image width='100%' src="./blob-scene-haikei.png"/>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image width='100%' src="./stacked-steps-haikei.png"/>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image width='100%' src="./stacked-waves-haikei.png"/>
                </Carousel.Slide>
            </Carousel>
        </Modal>
    )
}