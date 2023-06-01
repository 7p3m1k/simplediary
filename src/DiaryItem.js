const DiaryItem = ({ author, content, emotion, created_date, id }) => {
  return (
    <div className="DiaryItem">
      <div className="info" key={id}>
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">
          작성 시간(ms) : {new Date(created_date).toLocaleDateString()}
        </span>
      </div>
      <div className="content">일기 : {content}</div>
    </div>
  );
};

export default DiaryItem;
