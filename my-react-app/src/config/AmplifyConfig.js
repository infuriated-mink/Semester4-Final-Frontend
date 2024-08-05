import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

class AmplifyConfig {
    constructor() {
        if (!AmplifyConfig.instance) {
            Amplify.configure(awsconfig);
            AmplifyConfig.instance = this;
        }
        return AmplifyConfig.instance;
    }
}

const instance = new AmplifyConfig();
Object.freeze(instance);

export default instance;