import styled from "styled-components";

export const CheckOutItemContainer = styled.div`
width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`
  
export const ImageContainer = styled.div`
width: 23%;
padding-right: 15px;
`
  
export const Image = styled.img`
width: 100%;
height: 100%;
`
  
export const Arrow = styled.div`
cursor: pointer;
padding: 0 10px;
`
  
export const RemoveButton = styled.div`
padding-left: 12px;
cursor: pointer;
  `

export const Name = styled.span`
width: 23%; 
`
  
export const Value = styled.span`
width: 23%;
margin: 0 10px;
`
  
export const Quantity = styled.span`
width: 23%;
display: flex;
`

// .checkout - item - container {
//   width: 100%;
//   display: flex;
//   min-height: 100px;
//   border-bottom: 1px solid darkgrey;
//   padding: 15px 0;
//   font-size: 20px;
//   align-items: center;

//   .image-container {
//     width: 23%;
//     padding-right: 15px;

//     img {
//       width: 100%;
//       height: 100%;
//     }
//   }
//   .name,
//   .price {
//     width: 23%;
//   }

//   .quantity {
//   width: 23%;
//     display: flex;

//     .arrow {
//       cursor: pointer;
//       padding: 0 10px;
//     }

//     .value {
//       margin: 0 10px;
//     }
//   }

//   .remove-button {
//     padding-left: 12px;
//     cursor: pointer;
//   }
// }
