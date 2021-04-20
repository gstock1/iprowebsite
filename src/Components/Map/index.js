import React from 'react';
import Select from 'react-select';
import {Container, FormWrap, FormContent, Form, FormH1, FormLabel, FormButton} from './MapElements';

const comOptions = [
    {value:'Barrington', label: 'Barrington'},
    {value:'Buffalo Grove', label:'Buffalo Grove'},
    {value:'West Dundee', label:'West Dundee'},
    {value:'Elgin', label:'Elgin'},
    {value:'Schaumburg', label:'Schaumburg'},
    {value:'Arlington Heights', label:'Arlington Heights'},
    {value:'Glenview', label: 'Glenview'},
    {value:'Des Plaines', label:'Des Plaines'},
    {value:'Oak Park', label:'Oak Park'},
    {value:'Elmwood Park', label:'Elmwood Park'},
    {value:'Oak Park', label:'Oak Park'},
    {value:'Cicero', label:'Cicero'},
    {value:'Elgin', label:'Elgin'},
    {value:'Bronzeville', label:'Bronzeville'},
    {value:'Brighton Park', label:'Brighton Park'},
    {value:'Elgin', label:'Elgin'},
    {value:'Oak Lawn', label:'Oak Lawn'},
    {value:'Evergreen', label:'Evergreen'},
    {value:'South Holland', label:'South Holland'},
    {value:'Calumet City', label:'Calumet City'},
    {value:'Orland Park', label:'Orland Park'},
    {value:'Blue Island', label:'Blue Island'},
    {value:'Homewood', label:'Homewood'},
    {value:'Tinley Park', label:'Tinley Park'},
    {value:'Chicago Heights', label:'Chicago Heights'},
    {value:'Matteson', label:'Matteson'},
]

/*
const numOptions = [
    {value:1, label:'1'},
    {value:2, label:'2'},
    {value:3, label:'3'},
    {value:4, label:'4'},
    {value:5, label:'5'},
    {value:'more', label:'More'}

]*/


//var community = ""

const Map = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form action="">
                            <FormH1>See what neighborhoods are in need!</FormH1>
                            <FormLabel htmlFor='for'>Select from the following..</FormLabel>
                            <Select options={comOptions}/>
                            <FormButton type='submit'>Submit</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>

        </>

    )
}

export default Map