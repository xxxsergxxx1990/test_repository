import { Formik, Field , ErrorMessage} from 'formik';
import { StyledForm ,StyledField,FormGroup,ErrorMsg} from './QuizForm.styled';


import * as Yup from 'yup';
 



const quizSchems = Yup.object().shape({
  topic:Yup.string().min(3,'Too Short').required('Required'),
  time:Yup.number().min(10,'Must be 10 or more').required('required'),
  questions:Yup.number().min(3,'At last 3').required('required'),
  level:Yup.string().oneOf(['beginner',"intermediate","advanced"]).required('required')
})

export const QuizForm = ({onAdd}) => {
  return (
    
      <Formik
        initialValues={{
          topic: '',
          level: 'beginner',
          time: 0,
          questions: 0,
        }}
        validationSchema = {quizSchems}
        onSubmit={(values,actions) => {
          console.log(values);
          onAdd()
          actions.resetForm()
        }}
      >
        <StyledForm>
          <FormGroup>
            Topic
            <StyledField name="topic" />
            <ErrorMsg name="topic" component = "span"/>
          </FormGroup>
          <FormGroup>
            Time
            <StyledField name="time" type="number" />
            <ErrorMsg name="time" component = "span"/>
          </FormGroup>
          <FormGroup>
            Questions
            <StyledField name="questions" type="number" />
            <ErrorMsg name="questions" component = "span"/>
          </FormGroup>
          <FormGroup>
          <StyledField as="select" name="level">
             <option value="beginner">Beginner</option>
             <option value="intermediate">Intermediate</option>
             <option value="advanced">Advanced</option>
           </StyledField>
            
          </FormGroup>
          <button type="submit">Submit</button>
        </StyledForm>
      </Formik>
   
  );
};
