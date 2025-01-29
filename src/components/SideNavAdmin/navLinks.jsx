
import { Basket, ClipboardText, ShoppingCartSimple } from "@phosphor-icons/react"


export const navLinks = [
    {
        id: 1,
        label: 'Pedidos',
        path: '/admin/pedidos',
        icon:  <ClipboardText/>
    },
    {
        id: 2,
        label: 'Produtos',
        path: '/admin/produtos',
        icon: <Basket/>
    },
    {
        id: 3,
        label: 'Adicionar produtos',
        path: '/admin/novo-produto',
        icon:   <ShoppingCartSimple/>
    }
]