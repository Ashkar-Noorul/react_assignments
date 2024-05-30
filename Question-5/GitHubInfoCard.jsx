import React, { useEffect, useState } from "react";
import "../GitHubInfoCard.css";

const GitHubInfoCard = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUserData(data);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchGitHubUserData();
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="github-card">
      <img src={userData.avatar_url} alt={`${userData.login} avatar`} />
      <h2>{userData.name}</h2>
      <p>{userData.bio}</p>
      <p>
        <strong>Username:</strong> {userData.login}
      </p>
      <p>
        <strong>Location:</strong> {userData.location}
      </p>
      <p>
        <strong>Public Repos:</strong> {userData.public_repos}
      </p>
      <p>
        <strong>Followers:</strong> {userData.followers}
      </p>
      <p>
        <strong>Following:</strong> {userData.following}
      </p>
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default GitHubInfoCard;
