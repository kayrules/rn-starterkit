import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import MenuNavigator from './src/components/menu/views/MenuNavigator'
import {
    Font,
    AppLoading,
    Asset,
    Image
} from 'expo';

export default class App extends React.Component
{
    state = {
        isReady: false,
    };

    componentWillMount() {
        this._loadAssetsAsync();
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }

        return (
            <Provider store={store}>
                <MenuNavigator />
            </Provider>
        );
    }

    async _loadAssetsAsync() {
        const images = [
            require('./src/assets/images/logo1.png'),
            require('./src/assets/images/men.jpg'),
            require('./src/assets/images/parentLogin.png'),
            require('./src/assets/images/spLogin.png'),
        ];

        for (let image of images) {
            await Asset.fromModule(image).downloadAsync();
        }

        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require("native-base/Fonts/Ionicons.ttf"),
            'Panton-Regular': require('./src/assets/fonts/Panton-Regular.otf'),
            'Panton-Bold': require('./src/assets/fonts/Panton-Bold.otf'),
            'Panton-Black': require('./src/assets/fonts/Panton-Black.otf'),
        });

        this.setState({isReady: true});
    }

}
