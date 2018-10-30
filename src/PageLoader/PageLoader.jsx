import React from 'react';

import Loader from './Loader';
import Error from './Error';

class PageLoader extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            progress: 'loading',
            error: null,
        };
    }

    async componentDidMount() {
        const { provider } = this.props;

        document.body.classList.add('page-loader');
        this.setState({ progress: 'loading' });

        try {
            const data = await provider();

            document.body.classList.remove('page-loader');

            this.setState({
                progress: 'loaded',
                data,
            });
        } catch (error) {
            this.setState({
                progress: 'error',
                error,
            });
        }
    }

    render() {
        const { progress, data, error } = this.state;

        if (progress === 'loading') {
            return <Loader />;
        }

        if (progress === 'error') {
            return <Error error={error} />;
        }

        if (progress === 'loaded') {
            const Page = this.props.page;
            return <Page data={data} />;
        }

        return null;
    }
}

export default PageLoader;
