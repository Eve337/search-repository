import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {},
  tableContainer: {},
});

function createData(key: any, value: any) {
  return { key, value };
}

const AdditionalInfo = (props: any) => {
  const classes = useStyles();
  const rows = [];
  const rowsForOwner = [];

  for (const property in props.currRepInfo) {
    if (
      property === "license" ||
      property === "owner" ||
      property === "organization"
    ) {
      console.log("smth");
    } else {
      rows.push(createData(property, String(props.currRepInfo[property])));
    }
  }

  return (
    <>
      <h1>Repository Info</h1>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size='small'
          aria-label='a dense table'
        >
          <TableHead>
            <TableRow>
              <TableCell align='right'>Key</TableCell>
              <TableCell align='center'>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.key}>
                <TableCell align='right' component='th' scope='row'>
                  {row.key}:
                </TableCell>
                <TableCell align='center'>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdditionalInfo;

/*
archive_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/{archive_format}{/ref}"
archived: false
assignees_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/assignees{/user}"
blobs_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/git/blobs{/sha}"
branches_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/branches{/branch}"
clone_url: "https://github.com/scutan90/DeepLearning-500-questions.git"
collaborators_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/collaborators{/collaborator}"
comments_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/comments{/number}"
commits_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/commits{/sha}"
compare_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/compare/{base}...{head}"
contents_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/contents/{+path}"
contributors_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/contributors"
created_at: "2018-06-27T06:36:45Z"
default_branch: "master"
deployments_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/deployments"
description: "深度学习500问，以问答形式对常用的概率知识、线性代数、机器学习、深度学习、计算机视觉等热点问题进行阐述，以帮助自己及有需要的读者。 全书分为18个章节，50余万字。由于水平有限，书中不妥之处恳请广大读者批评指正。   未完待续............ 如有意合作，联系scutjy2015@163.com                     版权所有，违权必究       Tan 2018.06"
disabled: false
downloads_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/downloads"
events_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/events"
fork: false
forks: 13946
forks_count: 13946
forks_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/forks"
full_name: "scutan90/DeepLearning-500-questions"
git_commits_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/git/commits{/sha}"
git_refs_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/git/refs{/sha}"
git_tags_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/git/tags{/sha}"
git_url: "git://github.com/scutan90/DeepLearning-500-questions.git"
has_downloads: true
has_issues: true
has_pages: true
has_projects: true
has_wiki: true
homepage: "https://github.com/scutan90/DeepLearning-500-questions"
hooks_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/hooks"
html_url: "https://github.com/scutan90/DeepLearning-500-questions"
id: 138839979
issue_comment_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/issues/comments{/number}"
issue_events_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/issues/events{/number}"
issues_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/issues{/number}"
keys_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/keys{/key_id}"
labels_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/labels{/name}"
language: "JavaScript"
languages_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/languages"
license: {key: "gpl-3.0", name: "GNU General Public License v3.0", spdx_id: "GPL-3.0", url: "https://api.github.com/licenses/gpl-3.0", node_id: "MDc6TGljZW5zZTk="}
merges_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/merges"
milestones_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/milestones{/number}"
mirror_url: null
name: "DeepLearning-500-questions"
network_count: 13946
node_id: "MDEwOlJlcG9zaXRvcnkxMzg4Mzk5Nzk="
notifications_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/notifications{?since,all,participating}"
open_issues: 98
open_issues_count: 98
owner: {login: "scutan90", id: 31844692, node_id: "MDQ6VXNlcjMxODQ0Njky", avatar_url: "https://avatars.githubusercontent.com/u/31844692?v=4", gravatar_id: "", …}
private: false
pulls_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/pulls{/number}"
pushed_at: "2021-05-30T12:32:36Z"
releases_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/releases{/id}"
size: 207042
ssh_url: "git@github.com:scutan90/DeepLearning-500-questions.git"
stargazers_count: 44623
stargazers_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/stargazers"
statuses_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/statuses/{sha}"
subscribers_count: 2314
subscribers_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/subscribers"
subscription_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/subscription"
svn_url: "https://github.com/scutan90/DeepLearning-500-questions"
tags_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/tags"
teams_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/teams"
temp_clone_token: null
trees_url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions/git/trees{/sha}"
updated_at: "2021-06-02T02:59:01Z"
url: "https://api.github.com/repos/scutan90/DeepLearning-500-questions"
watchers: 44623
watchers_count: 44623

*/
