import { View, Text } from "react-native";

export const mainMenuItems = [
  {
    key: "precise",
    title: "PRECISE MATH",
    screen: "Precise",
    description: (
      <View>
        <Text>
          Provide 100% accurate answers for basic arithmetic problems (solvable in your head).
        </Text>
        <Text></Text>
        <Text>
          During case interviews (for business consulting jobs), calculations with 100% accuracy
          are often required. Any single mistake means a failing grade.
          In physical interviews, calculators are prohibited, and short calculations in your head
          are highly recommended. This mode helps you practice that.
        </Text>
      </View>
    ),
  },
  {
    key: "estimation",
    title: "ESTIMATION MATH",
    screen: "Estimation",
    description: (
      <View>
        <Text>
          Provide an approximate answer (+/-20% margin of error is allowed) for more complex problems.
        </Text>
        <Text></Text>
        <Text>
          In some business consulting interviews, approximate answers within a 20% margin
          are acceptable, especially in market sizing tasks or estimation problems
          like "estimate the number of traffic lights in your city."
          Ask the interviewer if an approximation is allowed before proceeding.
        </Text>
      </View>
    ),
  },
  {
    key: "context",
    title: "MATH IN CONTEXT",
    screen: "MathInContext",
    description: (
      <View>
        <Text>
          Provide an approximate answer (+/-20% margin of error is allowed) for
          problems within business, financial, and analytical contexts.
        </Text>
        <Text></Text>
        <Text>
          In business consulting interviews and aptitude tests, you need to quickly
          analyze quantitative and verbal information combined to make calculations.
          This mode imitates that environment, allowing you to practice decision-making
          in real-life contexts.
        </Text>
      </View>
    ),
  },
];
