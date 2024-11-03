import { Grid, Image } from '@mantine/core';

type PostImageGridProps = {
    images: any[];
    setAndOpenModalWithStartingImage: (index: number) => void;
}
export default function PostImageGrid({images, setAndOpenModalWithStartingImage}: PostImageGridProps) {
    return (
        <Grid grow>
            {images.map((image, index) => (
                <Grid.Col span={4} onClick={()=>setAndOpenModalWithStartingImage(index)} key={index}>
                    <Image radius="md" width='100%' src={image}/>
                </Grid.Col>
            ))}

        </Grid>
    )
}