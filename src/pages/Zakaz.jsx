import React from 'react'
import { useBucket } from '../store/bucket';
import { Text, Contact, useBotContext, useCommand } from '@urban-bot/core';
import TelegramBot from 'node-telegram-bot-api'
import { TELEGRAM_TOKEN, CHANNEL } from '../render/telegram'


export function Zakaz() {

    const bot = new TelegramBot(TELEGRAM_TOKEN, {polling: false});

    const { chat, message } = useBotContext()
  
    const { addedProducts, removeProduct } = useBucket();
    let addedProductsArray = Array.from(addedProducts.values());

    const totalCount = addedProductsArray.reduce((totalCount, { count, price }) => totalCount + count * price, 0);

    if (addedProductsArray.length === 0) {
        return <Text>Прежде, чем сделать заказ, добавьте, пожалуйста, товары в корзину.</Text>;
    }

    if (addedProductsArray.length > 0) {
        let msg = `Заказ от пользователя @${chat.username} c id: ${chat.id}\n\n`;
        for (let i = 0; i < addedProductsArray.length; i++) {
            msg += `${addedProductsArray[i].name} - ${Number(addedProductsArray[i].price).toLocaleString()} сум - ${addedProductsArray[i].count} шт.\n`
        }
        msg += `\nНа общую сумму: ${Number(totalCount).toLocaleString()} сум\n\n`

        if (!chat.username) {

        } else if (chat.username === undefined ) {

        } else {
            // если есть username, отправляем сообщение на канал
            bot.sendMessage(CHANNEL, msg)
        }
      
     
    }

if (!chat.username) {
return <Text>У вас не указан username, поэтому мы не можем свзаться с вами и вы не можете сделать заказ. Для заказа вы должны указать свой username в вашем профиле</Text>;
}
    return (
        <Text>
            Ващ заказ:
            <br />
            {addedProductsArray.map((product, index) => {
                return (
                    <React.Fragment key={product.id}>
                        <i>{product.name}</i> - <b>{product.count}</b> /delete{index + 1}
                        <br />
                    </React.Fragment>
                );
            })}
            -----------------------------------
            <br />
            На сумму: <b>{Number(totalCount).toLocaleString()} сум</b>   
            <br /> 
            Успешно отправлен. В ближайшее время с вами свяжется курьер и уточнит детали заказа.
                
        </Text>
    )
}


