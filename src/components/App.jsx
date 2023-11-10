import { Component } from 'react';
import { QuizForm } from './QuizForm';
import { QuizList } from '../components/QuizList/QuizList';
import { SearchBar } from './SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import initialQuizItems from '../quiz-items.json';







export class App extends Component {
  state = {
    quizItems: [],
    filters: {
      topic: '',
      level: 'all',
    },
  };
  render() {
    return (
      <Layout>
        
        <SearchBar />
      
      </Layout>
    );
  }
}
