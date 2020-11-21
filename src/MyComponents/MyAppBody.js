import { Input, Segment } from 'semantic-ui-react'


const GenrateUi = ({ onChange }) => {

    var ui =
        <Segment basic >
            <Input
                icon={{ name: 'search', circular: true, link: true }}
                placeholder='Search...'
                onChange={onChange}
            />
        </Segment>

    return ui
}



const MyAppBody = ({ onChange }) => {

    return (<GenrateUi onChange={onChange} />)

}

export default MyAppBody