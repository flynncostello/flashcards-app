import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { useSelector, useDispatch } from "react-redux";
import { removeTopic } from "./topicsSlice";

export default function Topics() {
  const topics = useSelector(state => state.topics);
  const dispatch = useDispatch();

  return (
    <section className="center">
      <h1>Topics</h1>
      <ul className="topics-list">
        {Object.values(topics).map((topic) => (
          <li className="topic" key={topic.id}>
          <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
           <div className="topic-container">
             <img src={topic.icon} alt="" />
             <div className="text-content">
               <h2>{topic.name}</h2>
               <p>{topic.quizIds.length} Quizzes</p>
             </div>
           </div>
         </Link>
         <button className="delete-topic-button" onClick={() => dispatch(removeTopic(topic.id))}>Delete</button>
          </li>
        ))}
      </ul>
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}