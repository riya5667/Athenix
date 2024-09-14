"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Line,
  LineChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  Rectangle,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart"
import { Separator } from "~/components/ui/separator"

export default function Charts() {
  return (
    <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]">
      <Card className="lg:max-w-md">
        <CardHeader className="space-y-0 pb-2">
          <CardDescription>Today</CardDescription>
          <CardTitle className="text-4xl tabular-nums">
            75% <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">completed</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              progress: {
                label: "Progress",
                color: "hsl(var(--chart-1))",
              },
            }}
          >
            <BarChart
              accessibilityLayer
              margin={{
                left: -4,
                right: -4,
              }}
              data={[
                { date: "2024-01-01", progress: 20 },
                { date: "2024-01-02", progress: 30 },
                { date: "2024-01-03", progress: 40 },
                { date: "2024-01-04", progress: 50 },
                { date: "2024-01-05", progress: 60 },
                { date: "2024-01-06", progress: 70 },
                { date: "2024-01-07", progress: 75 },
              ]}
            >
              <Bar
                dataKey="progress"
                fill="var(--color-progress)"
                radius={5}
                fillOpacity={0.6}
                activeBar={<Rectangle fillOpacity={0.8} />}
              />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={4}
                tickFormatter={(value) => {
                  return new Date(value).toLocaleDateString("en-US", {
                    weekday: "short",
                  })
                }}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    hideIndicator
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    }}
                  />
                }
                cursor={false}
              />
              <ReferenceLine
                y={50}
                stroke="hsl(var(--muted-foreground))"
                strokeDasharray="3 3"
                strokeWidth={1}
              >
                <Label
                  position="insideBottomLeft"
                  value="Target Progress"
                  offset={10}
                  fill="hsl(var(--foreground))"
                />
                <Label
                  position="insideTopLeft"
                  value="50%"
                  className="text-lg"
                  fill="hsl(var(--foreground))"
                  offset={10}
                  startOffset={100}
                />
              </ReferenceLine>
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-1">
          <CardDescription>
            You have completed <span className="font-medium text-foreground">75%</span> of your event planning tasks.
          </CardDescription>
          <CardDescription>
            You need to complete <span className="font-medium text-foreground">25%</span> more to finish all tasks.
          </CardDescription>
        </CardFooter>
      </Card>
      <Card className="flex flex-col lg:max-w-md">
  <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2 [&>div]:flex-1">
    <div>
      <CardDescription>Total Budget</CardDescription>
      <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
        $50,000
      </CardTitle>
    </div>
    <div>
      <CardDescription>Spent</CardDescription>
      <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
        $30,000
      </CardTitle>
    </div>
  </CardHeader>
  <CardContent className="flex flex-1 items-center">
    <ChartContainer
      config={{
        budget: {
          label: "Budget",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="w-full"
    >
      <LineChart
        accessibilityLayer
        margin={{
          left: 14,
          right: 14,
          top: 10,
        }}
        data={[
          { date: "2024-01-01", budget: 10000 },
          { date: "2024-01-02", budget: 15000 },
          { date: "2024-01-03", budget: 20000 },
          { date: "2024-01-04", budget: 23000 },
          { date: "2024-01-05", budget: 26000 },
          { date: "2024-01-06", budget: 28000 },
          { date: "2024-01-07", budget: 30000 },
        ]}
      >
        <CartesianGrid
          strokeDasharray="4 4"
          vertical={false}
          stroke="hsl(var(--muted-foreground))"
          strokeOpacity={0.5}
        />
        <YAxis hide domain={[0, 50000]} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => {
            return new Date(value).toLocaleDateString("en-US", {
              weekday: "short",
            })
          }}
        />
        <Line
          dataKey="budget"
          type="monotone"
          stroke="var(--color-budget)"
          strokeWidth={2}
          dot={false}
          activeDot={{
            fill: "var(--color-budget)",
            stroke: "var(--color-budget)",
            r: 4,
          }}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              indicator="line"
              labelFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              }}
            />
          }
          cursor={false}
        />
      </LineChart>
    </ChartContainer>
  </CardContent>
</Card>
      </div>
      <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
      <Card className="max-w-xs">
  <CardHeader>
    <CardTitle>Event Statistics</CardTitle>
    <CardDescription>
      Overview of your event's guest list and RSVPs.
    </CardDescription>
  </CardHeader>
  <CardContent className="grid gap-4">
    <div className="grid auto-rows-min gap-2">
      <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
        250
        <span className="text-sm font-normal text-muted-foreground">
          total guests
        </span>
      </div>
      <ChartContainer
        config={{
          guests: {
            label: "Guests",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="aspect-auto h-[32px] w-full"
      >
        <BarChart
          accessibilityLayer
          layout="vertical"
          margin={{
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
          }}
          data={[
            {
              label: "Total",
              guests: 250,
            },
          ]}
        >
          <Bar
            dataKey="guests"
            fill="var(--color-guests)"
            radius={4}
            barSize={32}
          >
            <LabelList
              position="insideLeft"
              dataKey="label"
              offset={8}
              fontSize={12}
              fill="white"
            />
          </Bar>
          <YAxis dataKey="label" type="category" tickCount={1} hide />
          <XAxis dataKey="guests" type="number" hide />
        </BarChart>
      </ChartContainer>
    </div>
    <div className="grid auto-rows-min gap-2">
      <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
        180
        <span className="text-sm font-normal text-muted-foreground">
          confirmed
        </span>
      </div>
      <ChartContainer
        config={{
          confirmed: {
            label: "Confirmed",
            color: "hsl(var(--chart-2))",
          },
        }}
        className="aspect-auto h-[32px] w-full"
      >
        <BarChart
          accessibilityLayer
          layout="vertical"
          margin={{
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
          }}
          data={[
            {
              label: "Confirmed",
              confirmed: 180,
            },
          ]}
        >
          <Bar
            dataKey="confirmed"
            fill="var(--color-confirmed)"
            radius={4}
            barSize={32}
          >
            <LabelList
              position="insideLeft"
              dataKey="label"
              offset={8}
              fontSize={12}
              fill="white"
            />
          </Bar>
          <YAxis dataKey="label" type="category" tickCount={1} hide />
          <XAxis dataKey="confirmed" type="number" hide />
        </BarChart>
      </ChartContainer>
    </div>
  </CardContent>
</Card>
<Card className="max-w-xs">
  <CardHeader className="p-4 pb-0">
    <CardTitle>Vendor Management</CardTitle>
    <CardDescription>
      You have confirmed 8 out of 10 required vendors for your event.
    </CardDescription>
  </CardHeader>
  <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-0">
    <div className="flex items-baseline gap-1 text-3xl font-bold tabular-nums leading-none">
      8/10
      <span className="text-sm font-normal text-muted-foreground">
        vendors
      </span>
    </div>
    <ChartContainer
      config={{
        vendors: {
          label: "Vendors",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="ml-auto w-[72px]"
    >
      <BarChart
        accessibilityLayer
        margin={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        data={[
          { category: "Catering", confirmed: 1 },
          { category: "Venue", confirmed: 1 },
          { category: "Decor", confirmed: 1 },
          { category: "Music", confirmed: 1 },
          { category: "Photography", confirmed: 1 },
          { category: "Videography", confirmed: 1 },
          { category: "Florist", confirmed: 1 },
          { category: "Cake", confirmed: 1 },
          { category: "Transportation", confirmed: 0 },
          { category: "Rentals", confirmed: 0 },
        ]}
      >
        <Bar
          dataKey="confirmed"
          fill="var(--color-vendors)"
          radius={2}
          fillOpacity={0.2}
          activeBar={<Rectangle fillOpacity={0.8} />}
        />
        <XAxis
          dataKey="category"
          tickLine={false}
          axisLine={false}
          tickMargin={4}
          hide
        />
      </BarChart>
    </ChartContainer>
  </CardContent>
</Card>
<Card className="max-w-xs">
  <CardContent className="flex gap-4 p-4 pb-2">
    <ChartContainer
      config={{
        planning: {
          label: "Planning",
          color: "hsl(var(--chart-1))",
        },
        execution: {
          label: "Execution",
          color: "hsl(var(--chart-2))",
        },
        postEvent: {
          label: "Post-Event",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-[140px] w-full"
    >
      <BarChart
        margin={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 10,
        }}
        data={[
          {
            phase: "planning",
            value: 80,
            label: "80% complete",
            fill: "var(--color-planning)",
          },
          {
            phase: "execution",
            value: 20,
            label: "20% complete",
            fill: "var(--color-execution)",
          },
          {
            phase: "postEvent",
            value: 0,
            label: "Not started",
            fill: "var(--color-postEvent)",
          },
        ]}
        layout="vertical"
        barSize={32}
        barGap={2}
      >
        <XAxis type="number" dataKey="value" hide />
        <YAxis
          dataKey="phase"
          type="category"
          tickLine={false}
          tickMargin={4}
          axisLine={false}
          className="capitalize"
        />
        <Bar dataKey="value" radius={5}>
          <LabelList
            position="insideLeft"
            dataKey="label"
            fill="white"
            offset={8}
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  </CardContent>
  <CardFooter className="flex flex-row border-t p-4">
    <div className="flex w-full items-center gap-2">
      <div className="grid flex-1 auto-rows-min gap-0.5">
        <div className="text-xs text-muted-foreground">Planning</div>
        <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
          80%
        </div>
      </div>
      <Separator orientation="vertical" className="mx-2 h-10 w-px" />
      <div className="grid flex-1 auto-rows-min gap-0.5">
        <div className="text-xs text-muted-foreground">Execution</div>
        <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
          20%
        </div>
      </div>
      <Separator orientation="vertical" className="mx-2 h-10 w-px" />
      <div className="grid flex-1 auto-rows-min gap-0.5">
        <div className="text-xs text-muted-foreground">Post-Event</div>
        <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
          0%
        </div>
      </div>
    </div>
  </CardFooter>
</Card>
      </div>
      <div className="grid w-full flex-1 gap-6">
      <Card className="max-w-xs">
  <CardContent className="flex gap-4 p-4">
    <div className="grid items-center gap-2">
      <div className="grid flex-1 auto-rows-min gap-0.5">
        <div className="text-sm text-muted-foreground">Venue</div>
        <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
          90%
        </div>
      </div>
      <div className="grid flex-1 auto-rows-min gap-0.5">
        <div className="text-sm text-muted-foreground">Catering</div>
        <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
          75%
        </div>
      </div>
      <div className="grid flex-1 auto-rows-min gap-0.5">
        <div className="text-sm text-muted-foreground">Entertainment</div>
        <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
          60%
        </div>
      </div>
    </div>
    <ChartContainer
      config={{
        venue: {
          label: "Venue",
          color: "hsl(var(--chart-1))",
        },
        catering: {
          label: "Catering",
          color: "hsl(var(--chart-2))",
        },
        entertainment: {
          label: "Entertainment",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="mx-auto aspect-square w-full max-w-[80%]"
    >
      <RadialBarChart
        margin={{
          left: -10,
          right: -10,
          top: -10,
          bottom: -10,
        }}
        data={[
          {
            aspect: "entertainment",
            value: 60,
            fill: "var(--color-entertainment)",
          },
          {
            aspect: "catering",
            value: 75,
            fill: "var(--color-catering)",
          },
          {
            aspect: "venue",
            value: 90,
            fill: "var(--color-venue)",
          },
        ]}
        innerRadius="20%"
        barSize={24}
        startAngle={90}
        endAngle={450}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          dataKey="value"
          tick={false}
        />
        <RadialBar dataKey="value" background cornerRadius={5} />
      </RadialBarChart>
    </ChartContainer>
  </CardContent>
</Card>
<Card className="max-w-xs">
  <CardHeader className="p-4 pb-0">
    <CardTitle>Guest List</CardTitle>
    <CardDescription>
      You've received 180 RSVPs out of 250 invitations sent.
    </CardDescription>
  </CardHeader>
  <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-2">
    <div className="flex items-baseline gap-2 text-3xl font-bold tabular-nums leading-none">
      180/250
      <span className="text-sm font-normal text-muted-foreground">
        RSVPs
      </span>
    </div>
    <ChartContainer
      config={{
        rsvps: {
          label: "RSVPs",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="ml-auto w-[64px]"
    >
      <BarChart
        accessibilityLayer
        margin={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        data={[
          { date: "2024-01-01", rsvps: 20 },
          { date: "2024-01-02", rsvps: 35 },
          { date: "2024-01-03", rsvps: 25 },
          { date: "2024-01-04", rsvps: 40 },
          { date: "2024-01-05", rsvps: 30 },
          { date: "2024-01-06", rsvps: 20 },
          { date: "2024-01-07", rsvps: 10 },
        ]}
      >
        <Bar
          dataKey="rsvps"
          fill="var(--color-rsvps)"
          radius={2}
          fillOpacity={0.2}
          activeIndex={6}
          activeBar={<Rectangle fillOpacity={0.8} />}
        />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={4}
          hide
        />
      </BarChart>
    </ChartContainer>
  </CardContent>
</Card>
<Card className="max-w-xs">
  <CardHeader className="space-y-0 pb-0">
    <CardDescription>Event Countdown</CardDescription>
    <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
      30
      <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
        days left
      </span>
    </CardTitle>
  </CardHeader>
  <CardContent className="p-0">
    <ChartContainer
      config={{
        countdown: {
          label: "Countdown",
          color: "hsl(var(--chart-2))",
        },
      }}
    >
      <AreaChart
        accessibilityLayer
        data={[
          { date: "2024-01-01", daysLeft: 60 },
          { date: "2024-01-02", daysLeft: 55 },
          { date: "2024-01-03", daysLeft: 50 },
          { date: "2024-01-04", daysLeft: 45 },
          { date: "2024-01-05", daysLeft: 40 },
          { date: "2024-01-06", daysLeft: 35 },
          { date: "2024-01-07", daysLeft: 30 },
        ]}
        margin={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="date" hide />
        <YAxis domain={[0, 60]} hide />
        <defs>
          <linearGradient id="fillCountdown" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-countdown)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-countdown)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="daysLeft"
          type="monotone"
          fill="url(#fillCountdown)"
          fillOpacity={0.4}
          stroke="var(--color-countdown)"
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
          formatter={(value) => (
            <div className="flex min-w-[120px] items-center text-xs text-muted-foreground">
              Days left
              <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                {value}
                <span className="font-normal text-muted-foreground">
                  days
                </span>
              </div>
            </div>
          )}
        />
      </AreaChart>
    </ChartContainer>
  </CardContent>
</Card>
      </div>
    </div>
  )
}
