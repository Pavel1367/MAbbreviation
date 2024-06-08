import { defineStore } from 'pinia';
import { reactive, ref,  watch} from 'vue';
import axios from 'axios';
import { IAbbreviation, IQparams, IQuery,  } from './models';

export const useMainStore = defineStore('main', () => {
  
  const searchQuery = reactive<IQuery>({query: '', contentSearch: false});
  const totalFound = ref<number>(0);
  const queryParams = ref<IQparams>({ limit: 10, offset: 0 });
  const abbreviations = ref<IAbbreviation[]>([]);
  const isLoading = ref<boolean>(true);
  const error = ref<string>('');
  const hasMore = ref<boolean>(true);
  const isIntersectionActive = ref<boolean>(true)
  const fetchAbbreviations = async (newSearchQuery?: IQuery) => {      
    try {
      isLoading.value = true;
      const response = await axios.get('http://localhost:5000/abbreviation', {
        params: {
          newSearchQuery: newSearchQuery ? JSON.stringify(newSearchQuery) : {},
          limit: queryParams.value.limit,
          offset: queryParams.value.offset,
        },
      });

      totalFound.value = response.data.total;
      const data: IAbbreviation[] = response.data.abbreviations;
      
      if (queryParams.value.offset === 0) {
        abbreviations.value = data;
      } else {
        abbreviations.value = [...abbreviations.value, ...data];
      }
      if (data.length < queryParams.value.limit) {
        hasMore.value = false;
      } else {
        hasMore.value = true;
        queryParams.value.offset += queryParams.value.limit;
      }
    } catch (e) {
      console.error('Failed to fetch abbreviations', error);
    } finally {
      isLoading.value = false;
    }
  };
  const resetIntersectionActive = () => {
    isIntersectionActive.value = true;
    setTimeout(() => {
      console.log('timeout worked');
      isIntersectionActive.value = false;
    }, 1000);
  };
  watch(searchQuery,async (newSearchQuery) => {
    queryParams.value.offset = 0;
    hasMore.value = true;
    resetIntersectionActive()
    await fetchAbbreviations(newSearchQuery);
    
  },
  {deep:true}
  );
  return {
    searchQuery,
    queryParams,
    isLoading,
    abbreviations,
    fetchAbbreviations,
    totalFound,
    hasMore,
    isIntersectionActive,
    resetIntersectionActive
   
  };

});
