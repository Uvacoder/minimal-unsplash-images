import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  href: string,
  download: string
}

const Button = styled.a`
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
`;

const DownloadButton: React.FC<ButtonProps> = ({ href, download }) => {
  return (
    <Button href={href} download={download}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill='none'
        stroke='#555'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'>
        <path d='M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m4-5l5 5 5-5m-5 5V3'></path>
      </svg>
    </Button>
  )
};

export default DownloadButton;