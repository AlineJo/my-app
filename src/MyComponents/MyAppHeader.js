import { Segment } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'


const GenerateUi = ({ name }) => {

    var ui =

        <Segment basic inverted padded='very' vertical>
            <Header as='h1'> 
            <Image src='logo512.png' size='mini'/>
            This is my First React App  
            <Image src='logo512.png' size='mini' />
            </Header>
            <Image src='logo512.png' size='small' centered />

            <Header as='h1'> Author: \ {name} / </Header>

        </Segment>
    return ui

}


const MyAppHeader = ({ name }) => {
    return (<GenerateUi name={name} />)
}

export default MyAppHeader