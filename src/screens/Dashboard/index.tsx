import { Box, Button, HStack, Text, useToast, VStack } from "native-base"
import React, { useEffect, useState } from "react"

interface DashboardProps { }

export default function Dashboard({ }: DashboardProps) {
  const [water, setWater] = useState<number>(0)
  const [cupSize, setCupSize] = useState<number>(250)
  const [goal, setGoal] = useState<number>(2000)

  const toast = useToast()

  function handleWater() {
    setWater(water + cupSize)

    toast.show({
      title: "Yeeeh!",
      description: `Você bebeu ${cupSize}ml de água`,
    })

  }

  function handleChangeCupSize(value: number) {
    setCupSize(value)
  }

  useEffect(() => {
    if (water >= goal) {
      toast.show({
        title: "Oba!",
        description: "Você atingiu sua meta diária",
        placement: "top"
      })
    }
  }, [water]);

  return (
    <VStack flex={1} alignItems="center" justifyContent="center">
      <Text fontSize="sm">copo de {cupSize} ml</Text>

      <HStack space="3" alignItems="center">
        <Text fontSize="6xl">{water}</Text>
        <Text fontSize="xl">/{goal}{' '}ml</Text>

      </HStack>


      <Button
        mt={5}
        colorScheme="primary"
        onPress={handleWater}
      >
        Beber água
      </Button>

      <Box mt={10}>
        <Button.Group >
          <Button onPress={() => handleChangeCupSize(250)} colorScheme="teal">250ml</Button>
          <Button onPress={() => handleChangeCupSize(300)} colorScheme="teal">300ml</Button>
          <Button onPress={() => handleChangeCupSize(500)} colorScheme="teal">500ml</Button>
        </Button.Group>

      </Box>
    </VStack>
  )
}
