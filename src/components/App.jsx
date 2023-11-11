import { Component } from 'react';
import {nanoid} from 'nanoid'
import { QuizForm } from './QuizForm/QuizForm';
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
  updateTopicFilter = newTopic => {
    this.setState(prevState => {
      return {
        filters: {
          ...prevState,
          topic: newTopic,
        },
      };
    });
  };
  updateLevelFilter = newLevel => {
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          level: newLevel,
        },
      };
    });
  };

  resetFilters = () => {
    this.setState({
      filters: {
        topic: '',
        level: 'all',
      },
    });
  };

  deleteQuiz = (quizId) =>{
this.setState(prevState =>{
  return{
    quizItems:prevState.quizItems.filter(item =>item.id !==quizId)
  }
})
  }
  addQuiz = (newQuiz)=>{
    const quiz = {
      ...newQuiz,
      id:nanoid(),
    }
    this.setState(prevState =>{
      return{
        quizItems:[...prevState.quizItems,newQuiz,quiz],
        
      }
    })
  }
  render() {
    const { quizItems, filters } = this.state;
    const visibleQuizItems = quizItems.filter(item => {
      const hasTopic = item.topic
        .toLowerCase()
        .includes(filters.topic.toLowerCase());

      if (filters.level === 'all') {
        return hasTopic;
      }
      const machesLevel = item.level === filters.level;
      return hasTopic && machesLevel;
    });

    return (
      <Layout>
        <QuizForm onAdd = {this.addQuiz}/>
        <SearchBar
          filters={filters}
          updateTopic={this.updateTopicFilter}
          updateLevel={this.updateLevelFilter}
          onReset={this.resetFilters}
        />

        {visibleQuizItems.length > 0 && <QuizList items={visibleQuizItems} 
        onDelete = {this.deleteQuiz}/>}
        <GlobalStyle />
      </Layout>
    );
  }
}
