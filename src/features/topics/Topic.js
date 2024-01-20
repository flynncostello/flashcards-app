import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams, Navigate } from "react-router-dom";
import ROUTES from "../../app/routes";

export default function Topic() {
  const topics = useSelector(state => state.topics);
  const quizzes = useSelector(state => state.quizzes);
  const { topicId } = useParams();
  //console.log(topicId);
  //console.log(topics);
  const topic = topics[topicId];
  //console.log(topic);

  if(!topic) {
    return <Navigate to={ROUTES.topicsRoute()} replace/>
  }
  
  const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId]);

  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>{topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
