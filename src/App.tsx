import React from 'react';
import {Button, ButtonGroup, Route, Router, useBotContext } from '@urban-bot/core';
import { Bucket } from './pages/Bucket';
import { Catalog } from './pages/Catalog';
import { Zakaz } from './pages/Zakaz';
import { Info } from './pages/Info';
import { ProductsProvider } from './store/products';
import { BucketProvider } from './store/bucket';

export function App() {
    const { chat } = useBotContext();

    return (
        <ProductsProvider>
            <BucketProvider>
                {/* <Text>Добро пожаловать в тестовый магазин! </Text> */}
                <ButtonGroup maxColumns={2}
                    title={`Добро пожаловать в тестовый магазин, ${chat.firstName ?? ''}! Нажмите на кнопку catalog для просмотра товаров.\n\nнужен интернет-магазин? Сделаю. Пишите: @SafaDmitry`}
                    isReplyButtons
                    isNewMessageEveryRender
                    isResizedKeyboard
                >
                    <Button>korzina</Button>
                    <Button>catalog</Button>
                    <Button>zakaz</Button>
                    <Button>info</Button>
                </ButtonGroup>
                <Router>
                {/* <Route path="/start">
                        <Catalog />
                    </Route> */}
                    <Route path="korzina">
                        <Bucket />
                    </Route>
                    <Route path="catalog">
                        <Catalog />
                    </Route>
                    <Route path="zakaz">
                        <Zakaz />
                    </Route>
                    <Route path="info">
                        <Info />
                    </Route>
                </Router>
            </BucketProvider>
        </ProductsProvider>
    );
}
