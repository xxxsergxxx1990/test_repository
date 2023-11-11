import { QuizCard } from '../QuizCard/OuizCard';
import { List, ListItem } from '../QuizList/QuizList.styled';

export const QuizList = ({ items,onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <QuizCard quiz={item} onDelete = {onDelete}/>
      ))}
    </List>
  );
};
