import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

export default function ReactQueryProvider(props: PropsWithChildren<{}>) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({});
