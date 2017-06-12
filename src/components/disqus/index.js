import React from 'react';

const SHORTNAME = 'slaimu';

class DisqusThread extends React.Component{
  renderDisqus() {
    if (window.DISQUS === undefined) {
      var script = document.createElement('script');
      script.async = true;
      script.src = 'https://' + SHORTNAME + '.disqus.com/embed.js';
      document.getElementsByTagName('head')[0].appendChild(script);
    } else {
      window.DISQUS.reset({reload: true});
    }
  }
  shouldComponentUpdate(nextProps) {
    return this.props.id !== nextProps.id ||
      this.props.title !== nextProps.title ||
      this.props.path !== nextProps.path;
  }

  componentDidMount() {
    this.renderDisqus();
  }

  componentDidUpdate() {
    this.renderDisqus();
  }

  render() {
    let { id, title, path, ...other} = this.props;

    if (process.env.BROWSER) {
      window.disqus_shortname = SHORTNAME;
      window.disqus_identifier = id;
      window.disqus_title = title;
      window.disqus_url = window.location.origin + '/' + path;
    }
    return <div {...other} id="disqus_thread" />;
  }

}

export default DisqusThread;
