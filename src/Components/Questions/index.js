import React from 'react';
import Select from 'react-select';
import {Container, FormWrap, FormContent, Form, FormH1, FormLabel, FormButton} from './QuestionsElements';

const tfOptions = [
    {value:'yes', label: 'Yes'},
    {value:'no', label:'No'}
]

const numOptions = [
    {value:1, label:'1'},
    {value:2, label:'2'},
    {value:3, label:'3'},
    {value:4, label:'4'},
    {value:5, label:'5'},
    {value:'more', label:'More'}

]

const Questions = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Form for Volunteers</FormH1>
                            <FormLabel htmlFor='for'>How many trees are visible?</FormLabel>
                            <Select options={numOptions}/>
                            <FormLabel htmlFor='for'>Is the roof visible?</FormLabel>
                            <Select options={tfOptions}/>
                            <FormLabel htmlFor='for'>How many windows are visible?</FormLabel>
                            <Select options={numOptions}/>
                            <FormLabel htmlFor='for'>Is the siding visible?</FormLabel>
                            <Select options={tfOptions}/>
                            <FormButton type='submit'>Submit</FormButton>
                
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>

        </>

    )
}

export default Questions