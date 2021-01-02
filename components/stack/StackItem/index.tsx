import React from 'react';
import styles from 'index.module.scss'

export type StackItemProps = {
    image: string,
    description: string
}

const StackItem = (props: StackItemProps) => {
    const {image, description} = props

    return <img src={image} alt={description}/>;
};

export default StackItem;
