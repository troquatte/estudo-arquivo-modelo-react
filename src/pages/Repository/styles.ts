import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover{
      color: #666;
    }
    svg{
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin: 80px 0 40px 0;

  header{
    display: flex;
    align-items: center;
    
    img{
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div{
      margin-left: 24px;
      
      strong{
        font-size: 36px;
        color: #3d3d4d;
      }

      p{
        font-sizE: 18px;
        color: #737380;
        margin-top:4px;
      }
    }
  }

  ul{
      display: flex;
      list-style: none;
      margin-top: 40px;

      li{
        & + li{
          margin-left: 80px;
        }

        strong{
          display: block;
          font-size: 36px;
          color: #3d3d4d;
        }

        span{
          display: block;
          margin-top: 4px;
          color: #6c6c80;
        }
      }
    }
`;

export const Issues = styled.ul`
  list-style: none;
  
  li{
    margin: 15px 0;
    transition: 0.2s;

    &:hover{
      transform: translateX(10px);
    }

    a{
      background: #FFFFFF;
      border-radius: 5px;
      padding: 15px;
      display: flex;
      align-items: center;
      color: #3D3D4D;
      text-decoration: none;

      p{
        strong{
          display: block;
        }
      }

      svg{
        margin-left: auto;
        color: #C9C9D4;
      }
    }
  }
`