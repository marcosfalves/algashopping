import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Wrapper } from './App.styles'

import LineChart from '../../shared/LineChart'

import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer'
import ShoppingList from '../ShoppingList'

import extractPercentage from '../../utils/extractPercentage'

import { 
    selectAllProducts, 
    selectSelectedProducts,
    selectSelectedProductTotalPrice
} from '../../store/Products/Products.selectors'
import {
    toggleProduct 
} from '../../store/Products/Products.actions'

function App() {
    const dispatch = useDispatch()
    
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    const products = useSelector(selectAllProducts)
    const selectedProducts = useSelector(selectSelectedProducts)
    const totalPrice = useSelector(selectSelectedProductTotalPrice)

    /*const [healthy, setHealthy] = useState(20)
    useEffect(function (){
        setTimeout(() => {
            setHealthy(80)
        }, 5000)
    },[])*/

    function handleToggle(id) {
        dispatch(toggleProduct(id))
    }

    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer
                left={<ShoppingList
                    title="produtos disponíveis"
                    products={products}
                    onToggle={(handleToggle)}
                />
                }
                middle={<ShoppingList
                    title="Sua lista de compras"
                    products={selectedProducts}
                    onToggle={(handleToggle)}
                />
                }
                right={<div>
                    estatisticas
                    <LineChart
                        color={colors[0]}
                        title="Saudável"
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts.filter(product => product.tags.includes('healthy')).length
                        )}
                    />
                    <LineChart
                        color={colors[1]}
                        title="Não tão saudável"
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts.filter(product => product.tags.includes('junk')).length
                        )}
                    />
                    <LineChart
                        color={colors[2]}
                        title="Limpeza"
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts.filter(product => product.tags.includes('cleaning')).length
                        )}
                    />
                    <LineChart
                        color={colors[3]}
                        title="Outros"
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts.filter(product => product.tags.includes('others')).length
                        )}
                    />
                    <div style={{ marginTop: 12 }}>
                        <h2 style={{ fontWeight: 400, fontSize: 12, color: '#00364A' }}>
                            Previsão de gastos:
                            <div style={{fontSize: 24}}>
                                {
                                    totalPrice.toLocaleString('pt-br', {
                                    minimumFractionsDigitis: 2,
                                    style: 'currency',
                                    currency: 'BRL'
                                    })
                                }
                            </div>
                        </h2>
                    </div>
                </div>
                }
            />
        </Container>
    </Wrapper>
}

export default App