import React, { useEffect, useState } from 'react'
import LineChart from '../../shared/LineChart'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import ShoppingList from '../ShoppingList'
import { Container, Wrapper } from './App.styles'
import productsMock from '../../mocks/productsList.json'
import extractPercentage from '../../utils/extractPercentage'

function App() {
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    const [products, setProducts] = useState(productsMock.products)
    const [selectedProducts, setSelectedProducts] = useState([])

    /*const [healthy, setHealthy] = useState(20)
    useEffect(function (){
        setTimeout(() => {
            setHealthy(80)
        }, 5000)
    },[])*/

    useEffect(() => {
        const newSelectedProducts = products
            .filter(product => product.checked)

        setSelectedProducts(newSelectedProducts)
    }, [products])

    function handleToggle(id) {
        const newProducts = products.map(product =>
            product.id === id
                ? { ...product, checked: !product.checked }
                : product
        )
        setProducts(newProducts)
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
                </div>
                }
            />
        </Container>
    </Wrapper>
}

export default App