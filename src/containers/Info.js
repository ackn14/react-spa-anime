import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// スタイル
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 10,
  },
  textLeft: {
    textAlign: 'left',
  },
  paragraph: {
    marginTop: 10,
    marginBottom: 10,
  },
});


class Info extends React.Component {

  render() {

    // Material-ui関連
    const { classes } = this.props;

    return (
      <div>
        <h2>「サービス名」について</h2>
        <div className={classes.textLeft}>

          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              「サービス名」とは
            </Typography>
            <Typography component="p">
              ここにサービスの説明を入れる。
            </Typography>
          </Paper>

          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              構成要素
            </Typography>
            <Typography component="p" className={classes.paragraph}>
              本アプリでは下記技術を用いています。各サービスの仕様変更ならびに障害発生時には、本アプリの提供・公開を中断する場合もございます。予めご了承下さい。
            </Typography>
            <Typography component="div" className={classes.paragraph}>
              <ul>
                <li>React・Redux・Material-UI</li>
              </ul>
            </Typography>
          </Paper>

          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              本アプリの目的
            </Typography>
            <Typography component="p" className={classes.paragraph}>
              このアプリは、SPAアプリ作成入門者が、React・Redux・Material-UI等を使ってアプリを作るためのHowTo用途で作成しています。
            </Typography>
          </Paper>
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              ソース
            </Typography>
            <Typography component="p" className={classes.paragraph}>
              このアプリのソースコードは以下のGitHubからご確認ください。
              <a href="https://github.com/ackn14/animel" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Typography>
          </Paper>

          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              自己紹介
            </Typography>
            <Typography component="p" className={classes.paragraph}>
              ここに自己紹介を入れる
            </Typography>
          </Paper>

        </div>
      </div>
    );
  }
}

// Material-ui関連
Info.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


// Material-uiのテーマ設定
export default withStyles(styles, { withTheme: true })(Info);
