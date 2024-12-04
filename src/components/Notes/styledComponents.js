// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`
export const Heading = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
`

export const CardContainer = styled.form`
  margin-top: 40px;
  width: 60vw;
  height: 30vh;
  box-shadow: 2px 2px 5px 4px #cbd5e1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 650px;
    height: 150px;
  }
`

export const TitleInput = styled.input`
  align-self: stretch;
  border: none;
  outline: none;
`

export const NoteInput = styled.textarea`
  align-self: stretch;
  height: 50px;
  margin-top: 5px;
  border: none;
  outline: none;
`

export const CustomButton = styled.button`
  align-self: flex-end;
  margin-top: 5px;
  margin-right: 10px;
  background-color: #4c63b6;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border: none;
  outline: none;
  font-family: Roboto;
  font-size: 14px;
`

export const ItemList = styled.ul`
  padding-left: 30%;
  padding-right: 30%;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`

export const NoNotesContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`

export const NoNotesHeading = styled.h4`
  color: #475569;
  font-family: 'Roboto';
`
export const NoNotesParagraph = styled.p`
  color: #475569;
  font-family: 'Roboto';
`

export const NoNotesImage = styled.img`
  height: 20vh;
`
