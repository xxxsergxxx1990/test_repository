export const SearchBar = ({filters:{topic,level},updateTopic,updateLevel,onReset}) => {
    return (
      <div>
        <input
          type="text"
          value={topic}
          onChange={evt => updateTopic(evt.target.value)}
          placeholder="Topic filter"
        />
        <select value={level} onChange = {evt =>updateLevel(evt.target.value)}>
          <option value="all">All</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <button onClick = {onReset}>reset filters</button>
      </div>
    );
  };