import { QuizCard } from '../QuizCard/OuizCard';
import { List, ListItem } from '../QuizList/QuizList.styled'

export const QuizList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <QuizCard quiz={item} />
        </ListItem>
      ))}
    </List>
  );
};
