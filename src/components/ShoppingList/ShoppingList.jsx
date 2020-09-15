import React from 'react'
import Checkbox from '../../shared/Checkbox/Checkbox'
import { useSelector } from 'react-redux'
import { selectAllProducts, selectSelectedProducts } from '../../store/Products/Products.selectors'
import { Title, Wrapper, Array } from './ShoppingList.styles'

function ShoppingList({ title, onToggle, displayOnlySelected }) {
    const products = useSelector(
        displayOnlySelected
        ? selectSelectedProducts
        :selectAllProducts
    )

    return <Wrapper>
        <Title>
            {title}:
        </Title>
        <Array>
            {
                products.map(product =>
                    <Checkbox
                        key={product.id}
                        value={product.checked}
                        title={product.name}
                        onClick={() => onToggle(product.id)}
                    />
                )
            }
        </Array>
    </Wrapper>
}

export default ShoppingList