import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Alert, Divider, Spin } from 'antd';

import { Repo } from './repo';
import { Markdown } from './markdown';
import { fetcher } from '../utils';

const Meta = ({ owner, repo }) => {
  const { data, error } = useSWR(`/repos/${owner}/${repo}`, fetcher);

  if (error) {
    return <Alert type="error">{error.message}</Alert>;
  }

  if (!data) {
    return <Spin />;
  }

  return <Repo repo={data} title={null} />;
}

const ReadMe = ({ owner, repo }) => {
  const { data, error } = useSWR(`/repos/${owner}/${repo}/readme`, fetcher);
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const downloadReadme = async (url) => {
      const readmeResponse = await fetch(url);
      const readmeData = await readmeResponse.text();
      setMarkdown(readmeData);
    };

    if (data?.download_url) {
      downloadReadme(data.download_url);
    }
  }, [data?.download_url]);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data) {
    return <Spin />;
  }

  return <Markdown source={markdown} />;
}

export const RepoDetails = (props) => {
  const { owner, repo } = props;

  return (
    <div>
      <Meta owner={owner} repo={repo} />
      <Divider />
      <ReadMe owner={owner} repo={repo} />
    </div>
  );
}
