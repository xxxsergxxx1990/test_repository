export const SearchBar = () => {
    return (
      <div>
        <input
          type="text"
          // value={topic}
          // onChange={evt => onUpdateTopic(evt.target.value)}
          placeholder="Topic filter"
        />
        <select >
          <option value="all">All</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
    );
  };