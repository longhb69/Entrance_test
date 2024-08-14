import unittest

def frequency(arr):
    if len(arr) == 0: return []
    dict = {}
    for w in arr:
        length = len(w)
        if length in dict:
            dict[length] += 1
        else:
            dict[length] = 1
    max_values = max(dict.values())
    max_keys = [key for key in dict if dict[key] == max_values]
    
    result = []
    for key in max_keys:
        for w in arr:
            if(len(w) == key):
                result.append(w)
    return result


class TestGetMostFrequency(unittest.TestCase):
    def test_get_most_frequency(self):
        self.assertEqual(frequency(['a', 'ab', 'abc', 'cd', 'def', 'gh']), ['ab', 'cd', 'gh'])
        self.assertEqual(frequency(['a', 'a', 'a', 'bb', 'bb', 'bb']), ['a', 'a', 'a', 'bb', 'bb', 'bb'])
        self.assertEqual(frequency([]), [])

if __name__ == '__main__':
    unittest.main()