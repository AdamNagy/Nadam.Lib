﻿using System.Collections.Generic;
using Nadam.Global.Lib.Graph;

namespace Nadam.Global.Lib.DirectedGraph
{
	public interface IDirectedGraph<TNode>
	{
		int NodesCount();
		int EdgeCount();

		#region Add
		/// <summary>
		/// Add a new node to the graph with no edge to and from it.
		/// </summary>
		/// <param name="nodeVal">The value of node</param>
		/// <returns></returns>
		Node<TNode> AddNode(TNode nodeVal);

        DirectedEdge AddEdgeFor(TNode startNode, TNode referenced);
		#endregion

		#region Contains
		/// <summary>
		/// Check if the given value belongs to the graph or not. Gives back the id of the node if exist,
		/// returns -1 otherwise
		/// </summary>
		/// <param name="nodeValue">Value to look for in the graph</param>
		/// <returns>true if node found, false otherwise</returns>
		bool ContainsNode(TNode nodeValue);

		/// <summary>
		/// Check if the given value belongs to the given node or not. Gives back the id of the node if exist
		/// </summary>
		/// <param name="nodeA">The parent, which childre are beeing checked</param>
		/// <param name="nodeB">The node which is beeing looked for</param>
		/// <returns>true if node found, false otherwise</returns>
		bool ContainsEdge(TNode nodeA, TNode nodeB);
		#endregion

		#region Get
		IList<Node<TNode>> GetNode(TNode nodeValue);
        IList<DirectedEdge> GetEdgesFor(TNode node);
		#endregion

		#region Remove
		/// <summary>
		/// Removes an existing node from the graph. Will remove all edge pointing to the removing node.
		/// </summary>
		/// <param name="nodeValue">the value of the node to remove</param>
		/// <returns>boolean about the reoval success</returns>
		bool RemoveNode(TNode nodeValue);
        bool RemoveEdge(TNode a, TNode b);
        #endregion

        // TODO: move to extensions (not atomic operation)
        ///// <summary>
        ///// Add a new directed node to an existing one. Node A need to belong to the graph. Node B is added if not belong to it yet.
        ///// </summary>
        ///// <param name="nodeValA">Existing node, FROM</param>
        ///// <param name="nodeValB">New node, created if not exist</param>
        ///// <returns></returns>
        //Node<TNode> AddNewNodeFor(TNode nodeValA, TNode nodeValB);

        ///// <summary>
        ///// Binds an existing node to an other. Both need to belong to the graph, if any of the two does not, error throwns.
        ///// </summary>
        ///// <param name="nodeValA">FROM node</param>
        ///// <param name="nodeValB">TO node</param>
        //void AddExistingNodeFor(TNode nodeValA, TNode nodeValB);

        ///// <summary>
        ///// Removes one referenced node for the given node, only if it references, otherwise, doing nothing
        ///// </summary>
        ///// <param name="nodeValue">the node for which referenced nodes are beeing checked</param>
        ///// <param name="referencedNodeValue">the referenced node beeing looked for</param>
        ///// <returns>boolean about the reoval success</returns>

        //bool RemoveNodeFor(TNode nodeValue, TNode referencedNodeValue);

        ///// <summary>
        ///// Removes all referenced nodes for the given node, but leaves the root node unharmed
        ///// </summary>
        ///// <param name="nodeValue">the value of the node for which referenced nodes should be removed</param>
        ///// <returns>boolean about the reoval success; will be false if any of the referenced nodes fails to be removed</returns>
        //bool RemoveAllNodeFor(TNode nodeValue);
    }
}
