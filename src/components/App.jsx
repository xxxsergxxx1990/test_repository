import { Component } from 'react';
import { QuizForm } from './QuizForm';
import { QuizList } from '../components/QuizList/QuizList';
import { SearchBar } from './SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import initialQuizItems from '../quiz-items.json';







export class App extends Component {
  state = {
    quizItems: initialQuizItems,
    filters: {
      topic: '',
      level: 'all',
    },
  };



  render() {
    const { quizItems, filters } = this.state;

    

    return (
      <Layout>
        <QuizForm />
        <SearchBar/>
        <QuizList items ={quizItems}/>
        {/* {quizItems.length > 0 && <QuizList items = {quizItems}/>} */}
        <GlobalStyle />
      </Layout>
    );
  }
}